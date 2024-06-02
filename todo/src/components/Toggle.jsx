import "./Toggle.css";

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            {/* <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isChecked}
            /> */}

            <label className="toggle">
                <div className="light"></div>
                <div className="light"></div>
                <div className="light"></div>

                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

                <div className="astro">
                    <div className="crater"></div>
                    <div className="crater"></div>
                    <div className="crater"></div>
                </div>

                <div className="cloud"></div>
                <div className="cloud"></div>
                <div className="cloud"></div>
                <input
                    type="checkbox"
                    id="check"
                    className="toggle"
                    onChange={handleChange}
                    checked={isChecked}
                />
            </label>

        </div>
    );
}