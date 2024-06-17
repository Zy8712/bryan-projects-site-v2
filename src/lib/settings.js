'use client'
import { createSlice } from '@reduxjs/toolkit';
import allProjects from '@/data/all-projects.json';

const initialState = {
  projects: allProjects,
  filteredProjects: allProjects,

  activeFilter: 0,
  activeCategory: 0,
  categoryFocus: 0,

  popupCategoriesOpen: false,
  popupIndex: 0,

  searchBarQuery: "",
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.categoryFocus = action.payload;
      if (state.categoryFocus === 1) {
        state.activeCategory = 1;
        state.activeFilter = 1;
      }
      else if (state.popupCategoriesOpen == true && (state.categoryFocus == state.activeCategory) && state.popupIndex == state.categoryFocus) {
        state.popupCategoriesOpen = false;
        state.popupIndex = 0;
      }
      else if (state.popupIndex == state.categoryFocus && state.popupCategoriesOpen == true) {
        state.popupCategoriesOpen = false;
        state.popupIndex = 0;
      }
      else {
        state.popupCategoriesOpen = true;
        state.popupIndex = state.categoryFocus;
      }

      if(state.categoryFocus < 2){
        state.popupCategoriesOpen = false;
        state.filteredProjects = filterProjects(state.categoryFocus);
      }
    },

    setOptionsFilter(state, action) {
      state.activeFilter = action.payload;
      if (state.activeFilter >= 100 && state.activeFilter < 200) {
        state.activeCategory = 2;
      }
      else if (state.activeFilter >= 200 && state.activeFilter < 300) {
        state.activeCategory = 3;
      }
      else if (state.activeFilter >= 300 && state.activeFilter < 400) {
        state.activeCategory = 4;
      }
      state.filteredProjects = filterProjects(state.activeFilter);
    },

    closePopup(state) {
      state.popupIndex = 0;
      state.popupCategoriesOpen = false;
    },

    resetFilters(state) {
      state.activeFilter = 0;
      state.categoryFocus = 0;
      state.activeCategory = 0;
      state.filteredProjects = allProjects;
    },

    setSearchQuery(state, action){
      state.searchBarQuery = action.payload;
    },
  },
});

const filterProjects = (val) => {
  let filtered = allProjects;

  if (val === 1) {
    filtered = filtered.filter((project) => project.featured);
  }

  else if (val >= 100 && val < 200) {
    const techFiltering = [
      'tags.html_css_sass_excl',
      'tags.vanilla_js',
      'technologies.react_TF',
      'technologies.tailwindcss_TF',
      'technologies.json_TF',
      'technologies.api_TF',
      'technologies.nextjs_TF',
      'technologies.vue_TF',
      'technologies.astro_TF',
      'technologies.wouter_TF'
    ];

    const filterKey = techFiltering[val - 100];

    filtered = filtered.filter((project) => {
      const keys = filterKey.split('.');
      return keys.length === 2 ? project[keys[0]][keys[1]] : false;
    });
  }

  else if (val >= 200 && val < 300) {
    const sourceFiltering = [1, 2, 3, 4, 7, 6, 5, 0];
    const sourceId = sourceFiltering[val - 200];
    filtered = filtered.filter((project) => project.source === sourceId);
  }

  else if (val >= 300 && val < 400) {
    const otherFiltering = [
      'tags.school',
      'tags.collab',
      'tags.freelance',
      'tags.multi_page',
      'tags.single_page',
      'tags.components',
      '' // This represents the "Latest 12 Projects" option
    ];

    const filterKey = otherFiltering[val - 300];

    if (val - 300 === 6) { // Check if it's the "Latest 12 Projects" option
      filtered = filtered.slice(0, 12);
    } else {
      filtered = filtered.filter((project) => {
        const keys = filterKey.split('.');
        return keys.length === 2 ? project[keys[0]][keys[1]] : false;
      });
    }
  }

  return filtered;
};

export const {
  setCategoryFilter,
  setOptionsFilter,
  closePopup,
  resetFilters,
  setSearchQuery,
} = projectsSlice.actions;

export default projectsSlice.reducer;
