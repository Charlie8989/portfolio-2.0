import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaNode, FaGit, FaGithub, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiMongodb, SiFigma, SiFramer, SiKubernetes } from 'react-icons/si'
import { SiGreensock } from 'react-icons/si'

const ThreeJSIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
    <g color="#000" fontWeight="400" fontFamily="sans-serif">
      <path style={{ lineHeight: 'normal', fontVariantLigatures: 'normal', fontVariantPosition: 'normal', fontVariantCaps: 'normal', fontVariantNumeric: 'normal', fontVariantAlternates: 'normal', fontVariantEastAsian: 'normal', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', textIndent: '0', textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', textOrientation: 'mixed', whiteSpace: 'normal', shapePadding: '0', shapeMargin: '0', inlineSize: '0', isolation: 'auto', mixBlendMode: 'normal', solidColor: '#000', solidOpacity: 1 }} d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" overflow="visible"/>
      <path style={{ lineHeight: 'normal', fontVariantLigatures: 'normal', fontVariantPosition: 'normal', fontVariantCaps: 'normal', fontVariantNumeric: 'normal', fontVariantAlternates: 'normal', fontVariantEastAsian: 'normal', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', textIndent: '0', textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', textOrientation: 'mixed', whiteSpace: 'normal', shapePadding: '0', shapeMargin: '0', inlineSize: '0', isolation: 'auto', mixBlendMode: 'normal', solidColor: '#000', solidOpacity: 1 }} d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" overflow="visible"/>
      <path style={{ lineHeight: 'normal', fontVariantLigatures: 'normal', fontVariantPosition: 'normal', fontVariantCaps: 'normal', fontVariantNumeric: 'normal', fontVariantAlternates: 'normal', fontVariantEastAsian: 'normal', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', textIndent: '0', textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', textOrientation: 'mixed', whiteSpace: 'normal', shapePadding: '0', shapeMargin: '0', inlineSize: '0', isolation: 'auto', mixBlendMode: 'normal', solidColor: '#000', solidOpacity: 1 }} d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" overflow="visible"/>
      <path style={{ lineHeight: 'normal', fontVariantLigatures: 'normal', fontVariantPosition: 'normal', fontVariantCaps: 'normal', fontVariantNumeric: 'normal', fontVariantAlternates: 'normal', fontVariantEastAsian: 'normal', fontFeatureSettings: 'normal', fontVariationSettings: 'normal', textIndent: '0', textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', textOrientation: 'mixed', whiteSpace: 'normal', shapePadding: '0', shapeMargin: '0', inlineSize: '0', isolation: 'auto', mixBlendMode: 'normal', solidColor: '#000', solidOpacity: 1 }} d="M40.902 22.809a1.129 1.129 0 00-.807.316L21.873 40.687a1.129 1.129 0 00.472 1.898l24.273 6.969a1.129 1.129 0 001.408-1.356l-6.051-24.53a1.129 1.129 0 00-1.073-.86zm-.65 3.3l5.114 20.736-20.517-5.89 15.403-14.847zM89.453 36.793a1.129 1.129 0 00-.806.316L70.423 54.67a1.129 1.129 0 00.472 1.899l24.274 6.968a1.129 1.129 0 001.408-1.356l-6.05-24.53a1.129 1.129 0 00-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.403-14.846zM52.944 71.864a1.129 1.129 0 00-.74.315L33.982 89.742a1.129 1.129 0 00.472 1.898l24.278 6.968a1.129 1.129 0 001.407-1.355l-6.055-24.531a1.129 1.129 0 00-1.14-.858zm-.582 3.3l5.118 20.737-20.522-5.89 15.404-14.846z" overflow="visible"/>
    </g>
  </svg>
)
const Skills = () => {


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3,
      }
    },
    // exit: { opacity: 0, y: 20 }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: 'easeOut'
      }
    },
    // exit: {
    //   opacity: 0,
    //   y: 20,
    //   transition: {
    //     duration: 2,
    //     ease: 'easeIn'
    //   }
    // }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    },
    // exit: {
    //   opacity: 0,
    //   scale: 0.8,
    //   transition: {
    //     duration: 1.5,
    //     ease: 'easeIn'
    //   }
    // },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const iconVariants = {
    hover: {
      rotate: 15,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }
  const skillsCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'ReactJS', icon: FaReact, color: 'text-blue-400' },
        { name: 'NextJS', icon: SiNextdotjs, color: 'text-black' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
        { name: 'shadcn/ui', icon: FaReact, color: 'text-slate-700' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'NodeJS', icon: FaNode, color: 'text-green-500' },
        { name: 'ExpressJS', icon: SiExpress, color: 'text-gray-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Javascript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'Typescript', icon: SiTypescript, color: 'text-blue-600' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: FaGit, color: 'text-orange-600' },
        { name: 'GitHub', icon: FaGithub, color: 'text-black' },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
        { name: 'Framer', icon: SiFramer, color: 'text-black' },
        { name: 'GSAP', icon: SiGreensock, color: 'text-lime-500' },
        { name: 'ThreeJS', icon: null, customIcon: ThreeJSIcon, color: 'text-white' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
      ]
    }
  ]

  return (
     <div className="mx-4 sm:mt-0 mt-[17vh] sm:mx-20 lg:mx-40 w-[90vw]">
      <div className="flex flex-col gap-2">
        <div className="font-light text-zinc-400 text-lg sm:text-xl">
          03. Skills
        </div>

        <div className="w-full border border-gray-200 p-10 rounded-sm bg-transparent">
          {/* <AnimatePresence mode="wait"> */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
              {skillsCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col gap-6"
                variants={categoryVariants}
                // exit="exit"
              >
                <motion.h3 
                  className="text-lg font-semibold text-gray-800 pb-4 border-b-2 border-orange-500"
                  initial={{ width: '0%', opacity: 0 }}
                  whileInView={{ width: '100%', opacity: 1 }}
                  // exit={{ width: '0%', opacity: 0 }}
                  transition={{ duration: 2.5, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIdx) => {
                    const IconComponent = skill.icon || skill.customIcon
                    const isCustomIcon = skill.customIcon !== undefined
                    return (
                      <motion.div
                        key={skillIdx}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 hover:border-orange-400 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-gray-50 hover:bg-orange-50"
                        variants={skillVariants}
                        whileHover="hover"
                        // exit="exit"
                      >
                        <motion.div
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          {isCustomIcon ? (
                            <IconComponent className={`w-10 h-10 mb-2 ${skill.color} transition-colors duration-300`} />
                          ) : (
                            <IconComponent className={`text-4xl mb-2 ${skill.color} transition-colors duration-300`} />
                          )}
                        </motion.div>
                        <motion.span 
                          className="text-sm font-medium text-gray-700 text-center"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {skill.name}
                        </motion.span>
                      </motion.div>
                    )
                  })}
                </div>

              </motion.div>
            ))}
          </motion.div>
          {/* </AnimatePresence> */}
        </div>
      </div>
    </div>
  )
}
export default Skills
