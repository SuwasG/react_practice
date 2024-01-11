import React,{useState, useEffect} from 'react'


const NavTry = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
      const itemsData = [
        {
          label: 'Laptops',
          children: [
            {
              label: 'Dell',
              url: '/laptops/dell',
            },
            {
              label: 'Acer',
              url: '/laptops/acer',
            },
            {
              label: 'HP',
              url: '/laptops/hp',
            },
            {
              label: 'Apple',
              url: '/laptops/apple',
            },
          ],
        },
        {
          label: 'Accessories',
          children: [
            {
              label: 'Mouse',
              url: '/accessories/mouse',
            },
            {
              label: 'Keyboard',
              url: '/accessories/keyboard',
            },
            {
              label: 'Monitor',
              url: '/accessories/monitor',
            },
          ],
        },
      ];
      setItems(itemsData);
    }, []);
    return (
        <>

            <nav>
                <ul>
                    {items.map((item) => (
                        <li key={item.label}>
                            <a href={item.url}>{item.label}</a>
                            {item.children && (
                                <ul>
                                    {item.children.map((child) => (
                                        <li key={child.label}>
                                            <a href={child.url}>{child.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>


        </>
    )
}

export default NavTry