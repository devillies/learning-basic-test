// @flow strict

import formatToCamelCase from '../formatToCamelCase';

describe('formatToCamelCase test', () => {
  it('should format simple object without changes', () => {
    // Write some tests here
  });
  it('should format snake case object to camelCase object', () => {
    // Write some tests here
    // Ex. Camel Case = thisIsCamelCase
    // Ex. Snake Case = this_is_snake_case
  });
  it('should format deeply nested SnakeCase Object to CamelCase Object', () => {
    let deeplyNested = {
      program: {
        title: 'Tantangan Ahlinya Makan Penuh Kesadaran',
        program_goal: '',
        advancement_type_description: 'check_based',
        category_description: 'nutrition',
        icon: '&#xE42E;',
        icon_color: 'color_coach_post',
        is_foundation: false,
        id: '57033f225a15c98a2b00000c',
      },
      current_habit_record: {
        days_completed: 0,
        habit: {
          text: 'Makan Penuh Kesadaran - Aku makan dengan perlahan hari Ini',
          completion_target: 7,
          id: '570340125a15c968dc000003',
          uncompleted_post_id: null,
          days_completed: null,
        },
        id: '58326b46bb9982993a00001a',
        days_active: 22.9966565662815,
      },
      id: '58326b46bb9982993a000019',
      days_on_program: null,
      days_completed: 0,
      total_program_time: 7,
    };

    // Write some tests here
  });
});
