import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MenuItem from '<molecules>/MenuItem/MenuItem'
import { spacing } from '<styles>/variables/spacing'

function MenuItemsList ({
  items,
  position,
  top,
  onItemChange
}) {
  const [menuItems, setMenuItems] = useState(mapMenuItems(items))

  useEffect(
    () => {
      setMenuItems(mapMenuItems(items))
    },
    [items]
  )

  return (
    <MenuItemsList.OverlayBox
      position={position}
      top={top}
    >
      <MenuItemsList.Container>
        {menuItems}
      </MenuItemsList.Container>
    </MenuItemsList.OverlayBox>
  )

  function mapMenuItems (menuItems) {
    return (
      menuItems &&
      menuItems.map(item => {
        const handleItemOnClick = value => {
          item.onClick && item.onClick()
          onItemChange(value)
        }
        const key = item.title

        return (
          <MenuItem
            onClick={handleItemOnClick}
            title={item.title}
            key={key}
          >
            {item.title}
          </MenuItem>
        )
      })
    )
  }
}

MenuItemsList.defaultProps = {
  position: 'static',
  top: 'mdPlusXs',
  onItemChange: () => { }
}

MenuItemsList.propTypes = {
  position: PropTypes.oneOf(['absolute', 'static', 'fixed']),
  top: PropTypes.oneOf(Object.keys(spacing)),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  left: PropTypes.oneOf(['unset', '0']),
  right: PropTypes.oneOf(['unset', '0']),
  onItemChange: PropTypes.func
}

MenuItemsList.Container = styled.div`
  min-height: ${props => props.theme.spacing.md};
  outline: 0;
  margin: 8px 0;

`

MenuItemsList.OverlayBox = styled.div`
  position: ${props => props.position};
  left: 0;
  right: unset;
  top: ${props => props.theme.spacing[props.top]};
  min-width: 26.6rem;
  max-width: 22rem;
  max-height: 32rem;
  background: ${props => props.theme.buttonColors.white};
  border-radius: ${props => props.theme.spacing.xxs};
  overflow: auto;
  border: 1px solid ${props => props.theme.textColors.lightGrey};
  box-shadow: 0px 2px 2px ${props => props.theme.textColors.black};
  z-index: -9;
`

export default MenuItemsList
