import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';
import './circularText.css';
import photo from '../../assets/images/Nicolas-Azcuy.jpg';

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300
  }
});

const CircularText = ({ 
  text = "DESARROLLADOR*AZCUY*NICOLÁS*", 
  spinDuration = 20, 
  onHover = 'speedUp', 
  className = '',
  size = 200 
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 1, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 2, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        scaleVal = 1;
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 10, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <div
      className={`circular-text ${className}`}
      style={{
        width: size,
        height: size,
        position: 'relative'
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        className="circular-text-letters"
        style={{
          rotate: rotation,
          width: size,
          height: size,
          position: 'absolute',
          top: 0,
          left: 0
        }}
        initial={{ rotate: 0 }}
        animate={controls}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const radius = size * 0.38;
          const transform = `translate(-50%, -50%) rotate(${rotationDeg}deg) translateY(-${radius}px)`;

          return (
            <span
              key={i}
              style={{
                transform,
                WebkitTransform: transform,
                fontSize: size * 0.065,
                position: 'absolute',
                left: '50%',
                top: '50%'
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>

      <div className="circular-text-center" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img src={photo} alt="Nicolás Azcuy" style={{ width: size * 0.9, height: size * 0.9, borderRadius: '50%' }} />
      </div>
    </div>
  );
};

export default CircularText;
