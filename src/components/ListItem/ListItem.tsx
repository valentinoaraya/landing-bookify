import "./ListItem.css"

interface ListItemProps {
    children: string
    width?: string | number;
}

const ListItem: React.FC<ListItemProps> = ({ children, width }) => {
    return (
        <div className="listItemsContainer">
            <h2 className="listText" style={{ width: typeof width === 'number' ? `${width}%` : width }}>{children}</h2>
        </div>
    )
}

export default ListItem;