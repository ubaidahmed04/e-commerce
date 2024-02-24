import './sliderCard.scss'

const SliderCard = () => {
    return (
        <div data-am-cardslider="" className='slider-main'>
            <input type="radio" name="card-slider" id="card-slider-1" />
            <input type="radio" name="card-slider" id="card-slider-3" />
            <input type="radio" name="card-slider" id="card-slider-2" defaultChecked="" />
            <div className="cs-slide-container">
                <label htmlFor="card-slider-1" className="cs-slide">
                    <div className="cs-slide-content">
                        Slide 1
                        <div style={{ height: 200, backgroundColor: "#ccc" }} />
                    </div>
                </label>
                <label htmlFor="card-slider-2" className="cs-slide">
                    <div className="cs-slide-content">
                        Slide 2
                        <div style={{ height: 200, backgroundColor: "#ccc" }} />
                    </div>
                </label>
                <label htmlFor="card-slider-3" className="cs-slide">
                    <div className="cs-slide-content">
                        Slide 3
                        <div style={{ height: 200, backgroundColor: "#ccc" }}>
                           
                        </div>
                    </div>
                </label>
                <label htmlFor="card-slider-4" className="cs-slide">
                    <div className="cs-slide-content">
                        Slide 4
                        <div style={{ height: 200, backgroundColor: "#ccc" }}>
                           
                        </div>
                    </div>
                </label>
            </div>
            <div className="cs-indicator-container">
                <label htmlFor="card-slider-1" className="cs-indicator" />
                <label htmlFor="card-slider-2" className="cs-indicator" />
                <label htmlFor="card-slider-3" className="cs-indicator" />
                <label htmlFor="card-slider-4" className="cs-indicator" />
            </div>
        </div>

    )
}

export default SliderCard;