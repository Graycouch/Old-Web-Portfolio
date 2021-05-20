import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";

export default function Projects(){
    const[projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            project,
            link,
            projectType,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className = "bg-blue-200 min-h-screen p-12">
            <section className = "container mx-auto">
                <h1 className = "text-6xl flex justify-center mb-12 cursive">
                    Welcome to my Project Page!
                </h1>
                <section className = "grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className = "relative rounded-lg shadow-xl bg-white p-16">
                        <h2 className = "text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                            <a
                                href = {project.link}
                                alt = {project.title}
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h2>
                        <div className = "text-gray-700 text-xs space-x-4">
                            <span>
                                <strong className = "font-bold">Finished on</strong>: {" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className = "font-bold">Type</strong>: {" "}
                                {project.projectType}
                            </span>
                            <p className = "my-6 text-lg text-gray-800 leading-relaxed">
                                {project.description}
                            </p>
                            <a href = {project.link} rel = "noopener noreferrer" target = "_blank" className = "text-blue-500 font-bold hover:underline hover:text-blue-400">
                                View the Project{" "}
                                <span role = "img" aria-label = "right pointer">
                                    👉
                                </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}