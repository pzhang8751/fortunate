import { Link } from "react-router"

function App() {
  return (
    <>
      <section className="bg-[url(/flowers.webp)] h-[95vh] flex flex-col justify-end text-white px-5 lg:px-8 pt-5 pb-[20vh] lg:pb-32">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold">We, the Fortunate</h1>
        <h2 className="mt-3 text-xl md:text-3xl">Fateful encounters create lifelong changes</h2>
      </section>
      <section className="mt-2 mb-10 px-5 py-5 text-center flex flex-col place-items-center gap-y-5 [&_p]:w-[80vw] [&_p]:lg:w-[60vw]">
        <h3 className="text-2xl md:text-4xl mb-2">Inspired by a movie, a trip, and a conversation</h3>
        <p><span className="italic">Past Lives</span>, by Celine Song, is a film that explores the concept of fate through the lens of a long-lost relationship between two lovers. Nora, a Korean immigrant, and her childhood sweetheart, Hae Sung, have a complicated timeline. Before Nora's family moved from Korea to the United States, the two first met in elementary school as close friends, then reconnecting over Skype as young adults and lovers. However, their relationship would eventually turn sour with conflicts arising from the distance and lack of commitment.</p>
        <p>A decade later, the two reconnect in New York City, but at very different times in their lives. Nora is now married to another man, Arthur, and Hae Sung recently broke up with his girlfriend. </p>
        <p>There comes a scene where Nora, Arthur, and Hae Sung are sitting at a table talking with each other. The conversation and questions between them ask the audience to consider life's what-ifs. What if Nora and Hae Sung's love had worked out earlier? What if Nora had never met Arthur after Hae Sung? These seemingly undestined moments in the grand scheme of life have a profound impact on the paths we take and where we ultimately end up.</p>
        <p>At the heart of the film is the Korean word 인연 (Inyeon)&mdash;referring to the Budhhist concept that our relationships in this lifetime are intricately intertwined from all our accumulated past lives. It's a poetic thought to believe that everyone we meet is a predestined occurence, coming into and leaving our lives at the "right" moment.</p>
        <p>As I reflected on this movie, I thought about my own crucial experiences and chance encounters. At the time I had finished watching <span className="italic">Past Lives</span>, I embarked on a solo trip to San Francisco. A newfound sense of independence I couldn't have imagined just five years ago. What convinced me to go? Funny enough, because of a friend I had recently made.</p>
        <p>That trip impacted me a lot to say the least. From standing at the top of the clearing of Muir Woods, looking down at the Californian valleys, to staring at the sun's rays glimmer across the bay's water as it set, I thought of how fortunate I was to be there. </p>
        <p>Post-trip, one more fullcircle memory came to me. A few months earlier, I had a very brief conversation with a spearate friend. The topic of conversation had come to the topic of having good conversations. In a sarcastic manner, I posed the "deepest" question that first came to mind, which was  "What do you think is the most signifcant point in your childhood?" Thinking nothing much of it, I expected a simple answer at most (after all how do you answer such a question without pondering every moment you've ever lived).</p>
        <p className="font-medium">"Meeting my friends in middle school."</p>
        <p>That was his response, and for good reason. His friends had been with him ever since&mdash;watched him grow up, lived every important memory with him. It's rather fascinating to realize how much the people around us can affect us longterm. What made this moment even more profoundly fateful was that if I had never made this friend, I would have never met the friend that convinced me to travel to California. My world was so incredibly, deeply connected beyond what I could imagine. Maybe it was 인연 leading me to every encounter, leading me to those memories I'll cherish forever. From these three experiences, I was inspired to start this project,</p>
        <p className="font-semibold font-libre text-lg">We, the Fortunate</p>
        <p>For those who are looking for a conversation to inspire them, or looking to share their own pivotal story, this place seeks to provide those opportunities.</p>
        <div className="mt-7 flex flex-row gap-[20vw] *:px-4 *:py-2 *:bg-amber-600 *:hover:cursor-pointer *:hover:scale-90 *:duration-200 *:ease-in-out font-libre *:transition-all *:hover:bg-amber-700">
          <Link to="/read">Start Reading</Link>
          <Link to="/write">Start Writing</Link>
        </div>
      </section>
      {/* <section>
        <h2>Behind the project</h2>
        <p>A lot can change in a year. </p>
      </section> */}
    </>
  )
}

export default App
