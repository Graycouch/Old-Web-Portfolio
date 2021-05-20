import React, {useState, useEffect} from "react"
import sanityClient from "../client.js"

export default function Post(){
    const [postData, setpost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
                        title,
                        company,
                        startDate,
                        endDate,
                        description,
                }`).then((data) => setpost(data))
                   .catch(console.error);
        }, []);

        return(
            <main className = "bg-blue-200 min-h-screen p-12">
                <section className = "container mx-auto">
                    <h1 className = "text-6xl flex justify-center cursive">
                        Welcome to my Experience Page!
                    </h1>
                    <section className = "grid grid-cols-2 gap-8">
                        {postData && postData.map((post, index) => (
                        <article className = "relative rounder-lg shadow-xl bg-white p-16">
                            <h3 className = "text-gray-800 text-3xl font-bold mb-2">
                                    {post.title}
                            </h3>
                            <div className = "text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className = "font-bold">Start Date</strong>:{" "}
                                    {new Date(post.startDate).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className = "font-bold">End Date</strong>:{" "}
                                    {new Date(post.endDate).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className = "font-bold">Company</strong>:{" "}
                                    {post.company}
                                </span>
                                <p className = "my-6 text-lg text-gray-700 leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                        </article>
                        ))}
                    </section>
                </section>
            </main>
        )
}