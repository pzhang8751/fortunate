import { useEffect, useState, useRef } from "react";
import supabase from "../utils/supabase";
import Entry from "./Entry";

function Counter({ target, duration = 2000 }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const steps = 60
        const increment = target / steps
        const interval = duration / steps

        const timer = setInterval(() => {
            setCount(prev => {
                const next = prev + increment
                if (next >= target) {
                    clearInterval(timer)
                    return target
                }
                return next
            })
        }, interval)

        return () => clearInterval(timer)
    }, [target, duration])

    return (
        <>
            <p className="text-center text-lg font-medium"><span className="text-4xl sm:text-5xl  lg:text-6xl font-bold font-libre">{Math.floor(count)}</span> Entries written</p>
            <p className="mt-2 text-center text-gray-500">Click on a post to read more about it.</p>
        </>

    )
}

export default function EntryDisplay() {
    const [entries, setEntries] = useState([]);
    const [loadedIds, setLoadedIds] = useState(new Set());
    const [loading, setLoading] = useState(false);
    const [moreData, setMoreData] = useState(true);

    const hasLoadedInitial = useRef(false);
    const loadingRef = useRef(false);

    const POSTS_PER_PAGE = 4;
    const CACHE_KEY = 'entries_cache';
    const CACHE_DATE_KEY = 'entries_cache_date';

    const [totalEntries, setTotal] = useState(0);

    // Check if cache is still same date (valid)
    function isCacheValid() {
        const cachedDate = localStorage.getItem(CACHE_DATE_KEY);
        const today = new Date().toDateString();
        return cachedDate === today;
    }

    // Loading data from cache
    function loadFromCache() {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached && isCacheValid()) {
                const parsedData = JSON.parse(cached);
                setEntries(parsedData.entries);
                setLoadedIds(new Set(parsedData.loadedIds));
                return true;
            }
        } catch (error) {}
        return false;
    }

    function saveToCache(newEntries, newIds) {
        try {
            const cacheData = {
                entries: newEntries,
                loadedIds: Array.from(newIds),
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
            localStorage.setItem(CACHE_DATE_KEY, new Date().toDateString());
            return true;
        } catch (error) {}
        return false;
    }

    async function loadMore() {
        if (loadingRef.current || loading || !moreData) return;

        loadingRef.current = true;
        setLoading(true);

        try {
            const excludeIds = Array.from(loadedIds);

            const { data, error } = await supabase.rpc('get_random_entries', {
                exclude_ids: excludeIds,
                batch_size: POSTS_PER_PAGE,
            });

            if (!error && data) {
                if (data.length === 0) {
                    setMoreData(false);
                } else {
                    const newEntries = [...entries, ...data];
                    const newIds = new Set(loadedIds);
                    data.forEach(entry => newIds.add(entry.id));

                    setEntries(newEntries);
                    setLoadedIds(newIds);
                    saveToCache(newEntries, newIds);
                }
            }
        } catch (error) {
            console.error('Error fetching entries:', error);
            setMoreData(false);
        } finally {
            setLoading(false);
            loadingRef.current = false;
        }
    }

    async function fetchTotalEntries() {
        const { count, error } = await supabase
            .from('Entries')
            .select('*', { count: 'exact', head: true });
        setTotal(count);
    }

    // Initial load
    useEffect(() => {
        if (!hasLoadedInitial.current) {
            hasLoadedInitial.current = true;
            const loadedFromCache = loadFromCache();
            if (!loadedFromCache) {
                loadMore();
            }
        }
        fetchTotalEntries();
    }, []);

    // Scroll-based infinite scroll
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight +
                document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, moreData, entries, loadedIds]);

    return (
        <>
            <Counter target={totalEntries} />
            <hr className="mt-5 mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-7 place-items-center mb-[25vh]">
                {entries.map(entry => (
                    <Entry key={entry.id} entry={entry} />
                ))}
            </div>
            {/* {loading && <div>Loading...</div>}
            {!loading && !moreData && <div>No more entries.</div>} */}
        </>
    );
}