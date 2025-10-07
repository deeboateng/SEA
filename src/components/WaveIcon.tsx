import { motion } from 'framer-motion';

interface WaveIconProps {
  className?: string;
  animate?: boolean;
}

export default function WaveIcon({ className = "w-8 h-8", animate = true }: WaveIconProps) {
  return (
    <motion.div
      className={className}
      animate={animate ? { y: [-3, 3, -3] } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M2 16C6 12 10 20 14 16C18 12 22 20 26 16C28 14 30 18 30 16"
          stroke="#C9A86A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 20C6 16 10 24 14 20C18 16 22 24 26 20C28 18 30 22 30 20"
          stroke="#C9A86A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}