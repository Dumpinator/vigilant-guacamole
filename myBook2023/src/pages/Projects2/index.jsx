import * as React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import './index.scss'



const variants = {
    enter: (direction) => {
        return {
            y: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            y: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const variants2 = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

export const images = [
    [
        "/slider01.jpg",
        "#F7DEF5",
        "Comment améliorer la reprise d’un produit de seconde main ?",
        "Freepry c’est la solution destinée aux boutiques pour se lancer dans la seconde main. Elle met à disposition une solution clé en main  permettant d’optimiser la reprise et la revente des produits de seconde main grâce à un algorithme de reprise.",
        "freepry1"
    ],
    [
        "/slider02.jpg",
        "#E2E4F3",
        "Comment simplifier l’expérience de jeu pour les débutants ?",
        "Lichess.org est une plateforme de jeu d’échecs en ligne open-source et destinée aux passionnés. Il propose plusieurs services à ses utilisateurs : lancement d'une partie, participation à de grands tournois et le suivi des compétitions.",
        "lichess"
    ],
    [
        "/slider03.jpg",
        "#FEF8EC",
        "Créer un outil de visualisation des dépôts et des ventes",
        "Freepry c’est la solution destinée aux boutiques pour se lancer dans la seconde main. Elle met à disposition une solution clé en main  permettant d’optimiser la reprise et la revente des produits de seconde main grâce à un algorithme de reprise.",
        "freepry2"
    ]
];

export const images2 = [
    "/step01.png",
    "/step02.png",
    "/step03.png"
];

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export const Projects2 = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="example-container">

            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex][0]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: {type: "spring", stiffness: 300, damping: 30},
                        opacity: {duration: 0.2}
                    }}
                    drag="x"
                    dragConstraints={{left: 0, right: 0}}
                    dragElastic={1}
                    onDragEnd={(e, {offset, velocity}) => {
                        const swipe = swipePower(offset.y, velocity.y);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />

                <div className="description-container">
                    <AnimatePresence>
                        <motion.div
                            key={page}
                            className="description"
                            initial={{opacity: 0, scale: 0.5}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{ ease: "easeIn", duration: 0.3 }}
                        >
                            <h1>{images[imageIndex][2]}</h1>
                            <p>{images[imageIndex][3]}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </AnimatePresence>

            <div className="command">
                <div className="next" onClick={() => paginate(1)}>
                    <span>{"‣"}</span>
                </div>
                <div className="prev" onClick={() => paginate(-1)}>
                   <span>{"‣"}</span>
                </div>
            </div>
            <Link to={`/projet/${images[imageIndex][4]}`}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img className={"card"}
                                key={page}
                                src={images2[imageIndex]}
                                custom={direction}
                                variants={variants2}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {type: "spring", stiffness: 300, damping: 30},
                                    opacity: {duration: 0.2}
                                }}
                                whileHover={{ scale: 1.1, cursor: "pointer" }}
                                drag="x"
                                dragConstraints={{left: 0, right: 0}}
                                dragElastic={1}
                                onDragEnd={(e, {offset, velocity}) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                    />

                </AnimatePresence>
            </Link>

            <div className="back" style={{
                position: "absolute",
                right: 0,
                width: "30%",
                backgroundColor: images[imageIndex][1],
                height: "100%"
            }}>
            </div>
        </div>
    );
};
