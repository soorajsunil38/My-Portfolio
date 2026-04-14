import React, { useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { $iReact, $iTailwindcss, $iHtml, $iCss, $iJavascript } from "../../assets/icons";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants"; 
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const About = () => {

    const skills = [
        { name: "React.js", icon: $iReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: $iTailwindcss, color: "#000000" },
        { name: "HTML", icon: $iHtml, color: "#3178C6" },
        { name: "CSS", icon: $iCss, color: "#06B6D4" },
        { name: "Javasvipt", icon: $iJavascript, color: "#339933" },
    ];

    return (
        <section id="about" className="relative py-20 bg-black overflow-hhidden">
            <RadialGradientBackground variant="about"/>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column Content  */}
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={60}>
                                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                  <Code2 className="w-4 h-4 text-primary"/>
                                    <span className="text-sm text-primary font-medium">
                                        Frontend Developer
                                    </span>  
                                    <Sparkles className="w-4 h-4 text-primary"/>
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <div className="flex flex-col gap-2">
                                    {PERSONAL_INFO.tagline.map((line, index) => (
                                        <h2
                                            key={index}
                                            className="text-4xl lg:text-5xl font-normal text-white leading-tight"
                                        >
                                            {line}
                                        </h2>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    {PERSONAL_INFO.bio.map((paragraph, index) => (
                                        <p 
                                            key={index}
                                            className="text-base text-white/70 leading-relaxed"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                        
                        <FadeIn delay={300}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                                {ABOUT_STATS.map((stat, index) => (
                                    <div 
                                        key={index} 
                                        className="relative left-3"
                                    >
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/20 to-primary/20 rounded-full"/>
                                        <p className="text-3xl font-normal mb-[8px] font-mono">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-white/60 leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className="inline-flex items-center gap-3 bg-white hover:bg-90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"/>
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About