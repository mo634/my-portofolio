import React, { useEffect, useState } from 'react';

const DynamicIconSelector = ({ skillIcon, skillIconLibrary }) => {

    const [iconName, setIconName] = useState('');
    const [IconComponent, setIconComponent] = useState(null);

    const loadIcon = async () => {
        try {
            let iconModule;

            // Use a switch case to handle different icon libraries
            switch (skillIconLibrary) {
                case 'fa':
                    iconModule = await import('react-icons/fa');
                    break;
                case 'tb':
                    iconModule = await import('react-icons/tb');
                    break;
                case 'md':
                    iconModule = await import('react-icons/md');
                    break;
                case 'ai':
                    iconModule = await import('react-icons/ai');
                    break;
                case 'bs':
                    iconModule = await import('react-icons/bs');
                    break;
                case 'fi':
                    iconModule = await import('react-icons/fi');
                    break;
                case 'ri':
                    iconModule = await import('react-icons/ri');
                    break;
                case 'si':
                    iconModule = await import('react-icons/si');
                    break;
                default:
                    console.error('Icon library not found');
                    setIconComponent(null);
                    return;
            }

            const icon = iconModule[skillIcon];
            setIconComponent(() => icon); // Set the icon component

        } catch (error) {
            console.error('Icon not found:', error);
            setIconComponent(null);
        }
    };
    useEffect(() => {
        loadIcon();
    }, [skillIcon, skillIconLibrary])

    return (
        <div>
            <div key={skillIcon}>
                {IconComponent ? (
                    <IconComponent size={40} className="text-primary" />
                ) : (
                    <p>Icon will appear here</p>
                )}
            </div>
        </div>
    );
};

export default DynamicIconSelector;
