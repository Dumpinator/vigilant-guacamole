// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from "framer-motion";
import './styles.scss';
import {Link} from "react-router-dom";


// eslint-disable-next-line react/prop-types
export const Card = ({ beforeImg, hoverImg, link }) => {
    const url = `url(${beforeImg})`;
    const url2 = `url(${hoverImg})`;
    const goto = `projet/${link}`;
    return (
            <Link to={goto}>
                <motion.div
                    style={{
                        backgroundImage: url,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        margin: "2em",
                        marginBottom: "5em",
                    }}
                    className="card"
                    whileHover={{
                        scale: 1.1,
                        backgroundImage: url2,
                        objectFit: "cover",

                    }}
                >
                </motion.div>
            </Link>

    )
}