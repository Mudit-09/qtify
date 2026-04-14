import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import useAutocomplete from "@mui/material/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "300px",
  zIndex: 10,
  overflowY: "auto",
  listStyle: "none",
  backgroundColor: "var(--color-black)",
});

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "search",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();

  const onSubmit = (e, value) => {
    e.preventDefault();
    if (!value) return;
    navigate(`/album/${value.slug}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => onSubmit(e, value)}
      >
        {/* INPUT */}
        <div {...getRootProps()} className={styles.inputWrapper}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>

        {/* BUTTON */}
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>

      {/* DROPDOWN */}
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const artists = option.songs.reduce((acc, curr) => {
              acc.push(...curr.artists);
              return acc;
            }, []);

            return (
              <li
                key={option.id}
                className={styles.listElement}
                {...getOptionProps({ option, index })}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>
                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      )}
    </div>
  );
}

export default Search;