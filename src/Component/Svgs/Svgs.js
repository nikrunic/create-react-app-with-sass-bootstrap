import React from 'react';
import icons from './icons';

export const CustIcon = ({ className, onClick, type, title }) => {
  const addClassName = className === undefined ? '' : className;
  const addtitle = title === undefined ? '' : title;
  const typeName = type === undefined ? '' : type;
  // const { removeMedia, index } = props;
  let typeValue = icons.find((o) => o.name === typeName);
  // console.log("clock --->", type )
  return (
    <>
      {typeValue && (
        <i
          className={`custIcon custIcon-${typeValue.name} ${addClassName}`}
          dangerouslySetInnerHTML={{ __html: typeValue.code }}
          onClick={onClick}
          title={addtitle}
        ></i>
      )}
    </>
  );
};

// height={props.height}
// width={props.width}
// fill={props.fill}
