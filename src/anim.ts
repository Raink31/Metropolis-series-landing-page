const transition = {
    duration: 1.2,
    ease: [.37,0,.32,.97]
}

export const fadeInDown = {
    initial: {
        y: "-100%",
        opacity: 0
    },
    loaded: {
        y: "0",
        opacity: 1,
        transition: {...transition, delay: .2}
    }
}

export const fadeInUp = {
    initial: {
        y: "60%",
        opacity: 0
    },
    loaded: {
        y: "0",
        opacity: 1,
        transition: {...transition, delay: .8}
    }
}

export const fadeInUp2 = {
    initial: {
        y: "60%",
        opacity: 0
    },
    loaded: {
        y: "-30%",
        opacity: 1,
        transition: {...transition, delay: 1}
    }
}

export const fadeInUpImage = {
    initial: {
        y: "60%",
        opacity: 0
    }
}

export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {x: 80},
    enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open : {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}
