import React from 'react';

export type Component = 'INPUT' | string;

export type ThemeItem = Record<string, React.CSSProperties>;

export type Theme = Record<Component, ThemeItem>;
