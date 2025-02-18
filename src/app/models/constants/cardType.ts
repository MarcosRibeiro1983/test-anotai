
export const TYPE_LIST = [
    {value: '3', label: 'Pizza', classCss: 'bg-pizza' },
    {value: '2', label: 'Flor',  classCss: 'bg-flower' },
    {value: '1', label: 'Paisagem',  classCss: 'bg-garden' },
]

export const TYPE_MAP = new Map();
TYPE_LIST.forEach( i => TYPE_MAP.set( i.value, { label: i.label, classCss: i.classCss  } ) )

