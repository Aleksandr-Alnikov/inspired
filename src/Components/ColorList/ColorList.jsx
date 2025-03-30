import s from './ColorList.module.scss';
import {useSelector} from "react-redux";
import {Color} from "../Color/Color.jsx";
import {ColorLabel} from "../ColorLabel/ColorLabel.jsx";


export const ColorList = ({colors, selectedColor, handleColorChange}) => {
    const {colorList} = useSelector(state => state.color);

    return handleColorChange ? (
        <div className={s.colorList}>
            {colors.map((id, i) => {
                const color = colorList.find(col => col.id === id);
                return <ColorLabel key={id} color={color} check={!i} selectedColor={selectedColor} handleColorChange={handleColorChange} />
            })}
        </div>
    ) : (
        <ul className={s.colorList}>
            {colors.map((item, i) => {
                const color = colorList.find(col => col.id === item);
                return <Color key={item} color={color?.code} check={!i} />
            })}
        </ul>
    );
};