import React from 'react'

const Hedars = ({ level, children, className}) => {
    const Tag = `${level}`;

    return <Tag className={className}>{children}</Tag>;
}

export default Hedars