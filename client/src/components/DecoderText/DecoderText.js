import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from '../../utils/delay';
import { classes } from '../../utils/style';
import styles from './DecoderText.module.css';

const hindi = [
    'क', 'ख', 'ग', 'घ',
    'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण',
    'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म',
    'य', 'र', 'ल', 'व',
    'श', 'ष', 'स', 'ह', 'क्ष',
    'त्र', 'र',
];

const glyphs = hindi;

const CharType = {
    Glyph: 'glyph',
    Value: 'value',
};

function shuffle(content, output, position) {
    return content.map((value, index) => {
        if (index < position) {
            return { type: CharType.Value, value };
        }

        if (position % 1 < 0.5) {
            const rand = Math.floor(Math.random() * glyphs.length);
            return { type: CharType.Glyph, value: glyphs[rand] };
        }

        return { type: CharType.Glyph, value: output[index].value };
    });
}

// const springConfig = { stiffness: 20, damping: 20 };
const springConfig = { stiffness: 8, damping: 5 };

const DecoderText = memo(
    ({ text, start = true, delay: startDelay = 0, eachCharClass, className, ...rest }) => {
        const output = useRef([{ type: CharType.Glyph, value: '' }]);
        const container = useRef();
        const reduceMotion = useReducedMotion();
        const decoderSpring = useSpring(0, springConfig);

        useEffect(() => {
            const containerInstance = container.current;
            const content = text.split('');
            let animation;

            const renderOutput = () => {
                const characterMap = output.current.map((item, id) => {
                    return `<span class="${styles[item.type]} ${eachCharClass + id}">${item.value}</span>`;
                });

                containerInstance.innerHTML = characterMap.join('');
            };

            const unsubscribeSpring = decoderSpring.onChange(value => {
                output.current = shuffle(content, output.current, value);
                renderOutput();
            });

            const startSpring = async () => {
                await delay(startDelay);
                decoderSpring.set(content.length);
            };

            if (start && !animation && !reduceMotion) {
                startSpring();
            }

            if (reduceMotion) {
                output.current = content.map((value, index) => ({
                    type: CharType.Value,
                    value: content[index],
                }));
                renderOutput();
            }

            return () => {
                unsubscribeSpring?.();
            };
        }, [decoderSpring, reduceMotion, start, startDelay, text, eachCharClass]);

        return (
            <span className={classes(styles.text, className)} {...rest}>
                <VisuallyHidden text={text} />
                <span aria-hidden className={styles.content} ref={container} />
            </span>
        );
    }
);

const VisuallyHidden = ({ text }) => (
    <span
        className={styles.hidden}
        data-show-on-focus={false}
        data-hidden
    >
        {text}
    </span>
);

export default DecoderText;
