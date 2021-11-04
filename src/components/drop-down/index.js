import React from 'react';
import Button from '../../components/button';
import './css/drop-down.css';
import LoadingSpinner from '../loading-spinner';

/**
 * This component forms the drop down list
 * 
 * @param {array} passes through an array of Star Wars films
 * @param {func} a function that obtains character info from film array
 * @param {func} a function that passes the id up
 * @param {string} the id of the object
 */

 const DropDown = ({ films, fetchCharacterInfo, setId, id }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState( !id ? "Select Movie" : films.filter((film) => {
        return film.id === id;
    })[0]?.title);
    const drop = React.useRef(null);
    function clickHandler(e) {
        if (!e.target.closest(`.${drop.current?.className}`) && open) {
            setOpen(false);
        }
    }
    React.useEffect (() => {
        document.addEventListener("click", clickHandler);
        return () => {
            document.removeEventListener("click", clickHandler);
        };
    });
    return (
        <div className="drop-down" ref={drop}>
            <Button text={title} className="btn-size" onClick={() => setOpen(!open)} />
            {open && (
                <div className="list-items">
                    {films.length > 0  ? films.map((film) => (
                    <Button
                        text={film.title}
                        className="ghost btn-size"
                        onClick={() => {
                            setOpen(!open);
                            setTitle(film.title);
                            fetchCharacterInfo(film.characters);
                            setId(film.id)
                        }}
                    />
                    )) : (
                        <LoadingSpinner />
                    )}
                </div>
            )}
        </div>
    ); 
};

export default DropDown;
