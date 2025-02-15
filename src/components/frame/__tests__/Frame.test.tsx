import * as React from 'react';
import { act, create } from 'react-test-renderer';
import { Frame } from '../Frame';

describe('<Frame />', () => {
    it('Frame without props', () => {
        let tree;
        act(() => {
            tree = create(<Frame />);
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with layout style properties', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        width: 100,
                        height: 200,
                        top: 50,
                        left: 20
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with color background', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        backgroundColor: '#1bff00'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Frame with image background', () => {
        let tree;
        act(() => {
            tree = create(
                <Frame
                    style={{
                        backgroundColor: '#ff8b29',
                        backgroundSize: 'cover',
                        backgroundImage: './image.png'
                    }}
                />
            );
        });
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
