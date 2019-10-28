//this is my local js file
$(function() {
  $('#js-shopping-list-form').submit(event => {
    // stop the default submission behavior
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
  //allow user the ability to clear inputs
  $('.shopping-list-entry').val('');
  //allow user to add new item to list
  $('.shopping-list').append(
    `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li`>
  });
// to strike through checked off items
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').toggleClass('shopping-item__checked');
  } );

// to delete items
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').find('.shopping-item').remove();
  } );
}
}
