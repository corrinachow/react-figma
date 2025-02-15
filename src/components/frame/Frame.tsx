import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout, YogaContextProvider } from '../../hooks/useYogaLayout';

interface Preset {
    name: string;
    width: number;
    height: number;
}

export const FRAME_PRESETS = {
    iPhoneX: {
        name: 'iPhone X',
        width: 375,
        height: 812
    },
    iPhone8Plus: {
        name: 'iPhone 8 Plus',
        width: 414,
        height: 736
    },
    iPhone8: {
        name: 'iPhone 8',
        width: 375,
        height: 667
    },
    iPhoneSE: {
        name: 'iPhone SE',
        width: 320,
        height: 568
    },
    googlePixel2: {
        name: 'Google Pixel 2',
        width: 411,
        height: 731
    },
    googlePixel2XL: {
        name: 'Google Pixel 2 XL',
        width: 411,
        height: 823
    },
    android: {
        name: 'Android',
        width: 360,
        height: 640
    },
    'iPadMini/9.7': {
        name: 'iPad Mini / 9.7',
        width: 768,
        height: 974
    },
    'iPadPro10.5': {
        name: 'iPad Pro 10.5',
        width: 834,
        height: 1112
    },
    'iPadPro12.9': {
        name: 'iPad Pro 12.9',
        width: 1024,
        height: 1366
    },
    surfacePro3: {
        name: 'Surface Pro 3',
        width: 1440,
        height: 990
    },
    surfacePro4: {
        name: 'Surface Pro 4',
        width: 1368,
        height: 912
    },
    desktop: {
        name: 'Desktop',
        width: 1440,
        height: 1024
    },
    macbook: {
        name: 'Macbook',
        width: 1152,
        height: 700
    },
    macbookPro: {
        name: 'Macbook Pro',
        width: 1440,
        height: 900
    },
    surfaceBook: {
        name: 'Surface Book',
        width: 1500,
        height: 1000
    },
    iMac: {
        name: 'iMac',
        width: 1280,
        height: 720
    },
    appleWatch42mm: {
        name: 'Apple Watch 42mm',
        width: 156,
        height: 195
    },
    appleWatch38mm: {
        name: 'Apple Watch 38mm',
        width: 136,
        height: 170
    },
    a4: {
        name: 'A4',
        width: 595,
        height: 842
    },
    a5: {
        name: 'A5',
        width: 420,
        height: 595
    },
    a6: {
        name: 'A6',
        width: 297,
        height: 420
    },
    letter: {
        name: 'Letter',
        width: 612,
        height: 792
    },
    tabloid: {
        name: 'Tabloid',
        width: 792,
        height: 1224
    },
    twitterPost: {
        name: 'Twitter Post',
        width: 1012,
        height: 506
    },
    twitterHeader: {
        name: 'Twitter Header',
        width: 1500,
        height: 500
    },
    facebookPost: {
        name: 'Facebook Post',
        width: 1200,
        height: 630
    },
    facebookCover: {
        name: 'Facebook Cover',
        width: 820,
        height: 312
    },
    instagramPost: {
        name: 'Instagram Post',
        width: 1080,
        height: 1080
    },
    instagramStory: {
        name: 'Instagram Story',
        width: 1080,
        height: 1920
    },
    dribbbleShot: {
        name: 'Dribbble Shot',
        width: 400,
        height: 300
    },
    dribbbleShotHD: {
        name: 'Dribbble Shot HD',
        width: 800,
        height: 600
    },
    linkedInCover: {
        name: 'LinkedIn Cover',
        width: 1584,
        height: 396
    }
};

export interface FrameProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
    preset?: Preset;
}

export const Frame: React.ElementType<FrameProps> = props => {
    const yogaRef = React.useRef();
    const yogaChildProps = useYogaLayout({ yogaRef });

    const { preset, ...propWithoutPreset } = props;
    const frameProps = {
        ...(preset || {}),
        ...transformLayoutStyleProperties(props.style),
        ...propWithoutPreset
    };

    return (
        <YogaContextProvider {...propWithoutPreset} yogaRef={yogaRef}>
            {({ yogaProps }) => <frame {...frameProps} {...yogaChildProps} {...yogaProps} innerRef={yogaRef} />}
        </YogaContextProvider>
    );
};
