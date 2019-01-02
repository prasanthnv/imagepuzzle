import React, { Component } from 'react';
import axios from 'axios';
import './Puzzle.css';
import {fetchImage} from '../../redux/actions/imageFetchAction';
class PuzzleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            slices: [],
            tile_size: 50,
            tiles: 3,
            show_image: false
        };
    }

    fetchImage = () => {
        let image_size = (this.state.tiles * this.state.tile_size) * this.state.tiles;
        console.log('==>', image_size, this.state.tiles)

        // axios.get('https://picsum.photos/' + image_size + '/' + image_size + '', { responseType: 'arraybuffer' }).
        //     then(response => {
        //         const base64 = btoa(
        //             new Uint8Array(response.data).reduce(
        //                 (data, byte) => data + String.fromCharCode(byte),
        //                 '',
        //             ),
        //         );
        //         this.setState({ image: "data:;base64," + base64 });
        //         var image = new Image();
        //         image.src = this.state.image;
        //         image.onload = () => {
        //             var numColsToCut = this.state.tiles,
        //                 numRowsToCut = this.state.tiles,
        //                 widthOfOnePiece = this.state.tiles * this.state.tile_size,
        //                 heightOfOnePiece = this.state.tiles * this.state.tile_size;
        //             var imagePieces = [];
        //             for (var x = 0; x < numRowsToCut; ++x) {
        //                 for (var y = 0; y < numColsToCut; ++y) {
        //                     var canvas = document.createElement('canvas');
        //                     canvas.width = widthOfOnePiece;
        //                     canvas.height = heightOfOnePiece;
        //                     var context = canvas.getContext('2d');
        //                     context.drawImage(image, y * heightOfOnePiece, x * widthOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
        //                     imagePieces.push(canvas.toDataURL());
        //                 }
        //             }
        //             console.log(imagePieces)

        //             // imagePieces now contains data urls of all the pieces of the image

        //             // load one piece onto the page
        //             var anImageElement = document.getElementById('myImageElementInTheDom');
        //             this.setState({ slices: imagePieces, show_image: true })

        //         };
        //     });
    }
    componentDidMount() {
        this.props.fetchImage();
    }
    levelUpHandler = () => {
        if (this.state.tiles >= 5) {
            this.setState({
                tiles: 2,
                show_image: false
            })
        }else{
            this.setState({
                tiles: this.state.tiles + 1,
                show_image: false
            })
        }
        

    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps, prevState);
    //     if (prevState.tiles != this.state.tiles) {
    //         this.fetchImage();
    //     }
    // }
    render() {
        let puzzle_style = {
            width: (this.state.tiles * this.state.tile_size) * this.state.tiles + 20,
            transformOrigin: `50% 0%`
        }
        switch (this.state.tiles) {
            case 2:
                puzzle_style.transform = `scale(1.2)`;
                puzzle_style.transformOrigin = `50% 0%`;
                break;
                case 4:
                puzzle_style.transform = `scale(0.6)`;
                puzzle_style.transformOrigin = `50% 0%`;
                break;
            case 5:
                puzzle_style.transform = `scale(0.4)`;
                puzzle_style.transformOrigin = `50% 0%`;
                break;
        }

        return (
            <div className="puzzle_container">
                <button onClick={this.levelUpHandler}>Level +</button>
                {(this.state.show_image === true) ?
                    (
                        <div className="puzzle" style={puzzle_style} >
                            {this.state.slices.map((item, i) => (
                                <img src={item} key={i} />
                            ))}
                        </div>
                    ) : ''
                }



            </div>
        );
    }

}

const mapStateToProps = state => ({
    image:state.image.image
});

export default PuzzleContainer;