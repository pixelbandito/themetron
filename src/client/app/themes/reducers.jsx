import PropTypes from 'prop-types';
import sass from 'sass.js/dist/sass.sync';

import { getCurrentThemeScss } from './selectors';

const SET_CURRENT_THEME = 'SET_CURRENT_THEME';
const SET_CURRENT_THEME_CSS = 'SET_CURRENT_THEME_CSS';
const SET_MAIN_FONT = 'SET_MAIN_FONT';
const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';
const SET_ROUNDNESS = 'SET_ROUNDNESS';
const SET_SHININIESS = 'SET_SHININIESS';
const SET_THICKNESS = 'SET_THICKNESS';
const SET_DEPTH = 'SET_DEPTH';

export const defaultThemeConfig = {
  font: '',
  colorPrimary: '#0275d8',
  roundness: '0.25',
  shininess: '0',
  thickness: '0',
  depth: '0',
};

export const themeConfigPropTypes = {
  font: PropTypes.string.isRequired,
  colorPrimary: PropTypes.string.isRequired,
  roundness: PropTypes.string.isRequired,
  shininess: PropTypes.string.isRequired,
  thickness: PropTypes.string.isRequired,
  depth: PropTypes.string.isRequired,
};

export const currentTheme = (state = { ...defaultThemeConfig }, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const currentThemeCss = (state = { css: '' }, action) => {
  switch (action.type) {
    case SET_CURRENT_THEME_CSS:
      return {
        ...state,
        css: action.payload,
      };
    default:
      return state;
  }
};

export const themeForm = (state = { ...defaultThemeConfig }, action) => {
  switch (action.type) {
    case SET_MAIN_FONT:
      return {
        ...state,
        font: action.payload,
      };
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        colorPrimary: action.payload,
      };
    case SET_ROUNDNESS:
      return {
        ...state,
        roundness: action.payload,
      };
    case SET_SHININIESS:
      return {
        ...state,
        shininess: action.payload,
      };
    case SET_THICKNESS:
      return {
        ...state,
        thickness: action.payload,
      };
    case SET_DEPTH:
      return {
        ...state,
        depth: action.payload,
      };
    default:
      return state;
  }
};

export const setMainFont = font => (dispatch) => {
  dispatch({
    type: SET_MAIN_FONT,
    payload: font,
  });
};

export const setPrimaryColor = color => (dispatch) => {
  dispatch({
    type: SET_PRIMARY_COLOR,
    payload: color,
  });
};

export const setRoundness = roundness => (dispatch) => {
  dispatch({
    type: SET_ROUNDNESS,
    payload: roundness,
  });
};

export const setShininess = shininess => (dispatch) => {
  dispatch({
    type: SET_SHININIESS,
    payload: shininess,
  });
};

export const setThickness = thickness => (dispatch) => {
  dispatch({
    type: SET_THICKNESS,
    payload: thickness,
  });
};

export const setDepth = depth => (dispatch) => {
  dispatch({
    type: SET_DEPTH,
    payload: depth,
  });
};

export const setCurrentTheme = theme => (dispatch) => {
  dispatch({
    type: SET_CURRENT_THEME,
    payload: theme,
  });

  sass.compile(getCurrentThemeScss({ currentTheme: theme }), (result) => {
    dispatch({
      type: SET_CURRENT_THEME_CSS,
      payload: result.text || '',
    });
  });
};
