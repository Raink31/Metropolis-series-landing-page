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

