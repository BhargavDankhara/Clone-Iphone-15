export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationPrpos
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationPrpos,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationPrpos,
      ease: "power2.inOut",
    },
    "<"
  );
};
