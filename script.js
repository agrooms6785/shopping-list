$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    // stop the default submission behavior
    event.preventDefault()
    const newItem = $('#shopping-list-entry').val()
    // console.log(newItem)
  //allow user the ability to clear inputs
  $('#shopping-list-entry').val('')
  //allow user to add new item to list
  $('.shopping-list').prepend(
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
    </li>`)
})

// toggle through checked/unchecked items
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item shopping-item__checked')
  })

// to delete items
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove()
  })
})
