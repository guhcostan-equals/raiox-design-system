import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import theme from '../../../../tokens/js'
import fontStyleMaker from '../../utils/FontUtil'
import icons from '../../../../tokens/js/icons'
import Icon from '../Icon'

const YearNavigatorStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.styles.spacing.stack.xxxs};
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'regular', 'sm', 'neutral.dark.base')};
`

function YearNavigator(props) {
  const index = props.years.findIndex(
    (item) => item === props.yearSelected.toString(),
  )

  const left = index > 0 || props.showAllYears
  const right = props.years.length > index + 1 || props.showAllYears

  return (
    <YearNavigatorStyle>
      <Icon
        size={theme.styles.icon.size.md}
        appearance="primary"
        disabled={!left}
        style={{
          marginRight: theme.styles.spacing.stack.nano,
          opacity: !left ? theme.styles.opacity.level.light : 1,
        }}
        path={icons['chevron-left']}
        onClick={() =>
          left &&
          props.onChange(
            dayjs()
              .set('year', props.years[index] || props.yearSelected)
              .add(-1, 'year')
              .get('year'),
          )
        }
      />

      <div style={{ userSelect: 'none' }}>{props.yearSelected}</div>

      <Icon
        size={theme.styles.icon.size.md}
        appearance="primary"
        disabled={!right}
        style={{
          marginLeft: theme.styles.spacing.stack.nano,
          opacity: !right ? theme.styles.opacity.level.light : 1,
        }}
        path={icons['chevron-right']}
        onClick={() =>
          right &&
          props.onChange(
            dayjs()
              .set('year', props.years[index] || props.yearSelected)
              .add(1, 'year')
              .get('year'),
          )
        }
      />
    </YearNavigatorStyle>
  )
}

YearNavigator.propTypes = {
  onChange: PropTypes.any,
  yearSelected: PropTypes.any,
  years: PropTypes.any,
  showAllYears: PropTypes.bool,
  disableRight: PropTypes.bool,
  disableLeft: PropTypes.bool,
}

export default YearNavigator