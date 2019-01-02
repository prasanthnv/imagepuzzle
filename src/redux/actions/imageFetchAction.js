import { FETCH_IMAGE } from './types';
import axios from 'axios';

export const fetchImage = () => dispatch => {
    let image_size = (this.state.tiles * this.state.tile_size) * this.state.tiles;
    console.log("dispatching image ...");
    axios.get('https://picsum.photos/' + image_size + '/' + image_size + '', { responseType: 'arraybuffer' }).
        then(response => {
            const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
            );
            let image = "data:;base64," + base64;
            dispatch({
                type: FETCH_IMAGE,
                payload: image
            });
        });
}