/**
 * AITU Esports Hub - jQuery Interactions & Animations
 * Requirement 6: Selector types, Traversal, Effects/Animations
 */

$(document).ready(function() {
  console.log("jQuery initialized successfully.");

  // jQuery Selector 1 (Class Selector) & jQuery Traversal 1 (.closest(), .find())
  // Interactive Toggle for Team Roster
  $('.toggle-roster-btn').on('click', function() {
    // jQuery Traversal: find roster details container relative to button
    const $rosterDetails = $(this).closest('.card-body').find('.roster-details');
    
    // jQuery Effect 1: slideToggle
    $rosterDetails.slideToggle(300, function() {
      // Toggle button text based on visibility state
      if ($(this).is(':visible')) {
        $(this).siblings('.toggle-roster-btn').text('Hide Roster');
      } else {
        $(this).siblings('.toggle-roster-btn').text('Show Roster');
      }
    });
  });

  // jQuery Selector 2 (ID Selector & Descendant Selector) & Traversal 2 (.children(), .parent())
  // Hover effects on cards
  $('.tournament-card').hover(
    function() {
      // jQuery Effect 2: animate shadow or opacity
      $(this).animate({ opacity: 0.95 }, 150);
    },
    function() {
      $(this).animate({ opacity: 1.0 }, 150);
    }
  );
});
