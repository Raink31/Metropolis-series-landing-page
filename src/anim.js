const transition = {
    duration: 1,
    ease: [0.76, 0, 0.24, 1]
}

export const fadeInUp = {
    initial: {
        y: 0
    },
    loaded: {
        y: "100%",
        transition
    }
}