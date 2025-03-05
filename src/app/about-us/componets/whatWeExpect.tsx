'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const items = [
  {
    title: 'Set Clear Expectations',
    description:
      'We can enjoy the trip best when we know the expectations from the trip...',
  },
  {
    title: 'Define Your Budget',
    description:
      'Most of us hesitate to reveal our budget, or there’s a mismatch between our budget and expectations...',
  },
  {
    title: 'Review The Offer',
    description:
      'Trust us, but not blindly. Since we haven’t met in person, we encourage you to review our offer...',
  },
  {
    title: 'Share Accurate Information',
    description:
      'While most travelers provide us with the necessary information, some may overlook or delay...',
  },
];

const AnimatedList = () => {
  const containerRef = useRef(null);
  const [scrollSteps, setScrollSteps] = useState(0);
  const { scrollY } = useScroll({ container: containerRef });
  const prevScrollY = useRef(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      setScrollSteps((prev) => {
        if (currentScrollY > prevScrollY.current) {
          return Math.max(prev - 1, 0);
        } else if (currentScrollY < prevScrollY.current) {
          return Math.min(prev + 1, items.length - 1);
        }
        return prev;
      });
      prevScrollY.current = currentScrollY;
    };
  
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="flex gap-6 p-8 mt-14">
      <div>
        <h2 className="text-3xl font-bold">What We Expect from You</h2>
        <p className="text-gray-600 max-w-lg">
          Great travel experiences are a two-way street. To ensure your journey is as magical as planned, we encourage you to:
        </p>
      </div>
      <div  className=" ">
        {items.map((item, index) => (
          <AnimatedCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            scrollSteps={scrollSteps}
          />
        ))}
      </div>
    </div>
  );
};

interface AnimatedCardProps {
  index: number;
  title: string;
  description: string;
  scrollSteps: number;
}

const AnimatedCard = ({ index, title, description, scrollSteps }: AnimatedCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.75, once: false });

  // Calculate overlap
  const shouldOverlap = scrollSteps > index;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: shouldOverlap ? -50 : 0, // Overlap by 50% if needed
              zIndex: items.length - index, // Ensure proper stacking order
            }
          : { opacity: 1, y: 50, zIndex: 0 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 relative"
      style={{
        marginTop: shouldOverlap ? '-50%' : '0', // Adjust margin for overlap
      }}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default AnimatedList;