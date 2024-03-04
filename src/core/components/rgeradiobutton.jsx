import './styles/rgeradiobutton.css'

export default function RGERadioButton({ button_name, button_toprightname, primary_color, shadow_color }) {
    return (
        <>
            <div name="radiobutton" className="rbutton">
                <input class="input" name="btn" id="value-1" type="radio" style={{
                    '--shadow_color': {shadow_color},
                    '--primary_color': {primary_color},
                }} />
                <div className="btn">
                    <span aria-hidden="false">_</span>{button_name}
                    <span class="btn__glitch" aria-hidden="false">{button_name}</span>
                    <label class="number">{button_toprightname}</label>
                </div>
            </div>
        </>
    )
}