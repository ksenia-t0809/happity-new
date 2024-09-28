$(document).ready(function() {
    // Dropdown
    $(document).mouseup(function (e) {
        if (!$('.dropdown').is(e.target)
        && $('.dropdown').has(e.target).length === 0)
        {
            $('.dropdown-button').removeClass('active');
            $('.dropdown-menu').removeClass('show');
       }
    });
    $('.dropdown').on('click', '.dropdown-button', function() {
        $(this).toggleClass('active');
        $(this).siblings('.dropdown-menu').toggleClass('show');
    });
    $('.dropdown-menu').on('click', '.dropdown-menu-item', function() {
        $(this).parents('.dropdown-menu').find('.dropdown-menu-item').removeClass('selected');
        $(this).parents('.dropdown-menu').find('.dropdown-menu-item').removeClass('default-val');
        $(this).addClass('selected');
    });

    // Search
    $('.search').on('click', '.search-input', function() {
        $(this).parents('.search').toggleClass('search-open')
    });
    $('.search-results .btn--category-full').on('click', function() {
        $(this).toggleClass('btn--selected');
    })
    
    // Collapse
    $('.collapse').on('click', '.collapse-button .arrow', function() {
        $(this).parents('.collapse-button').toggleClass('active');
        $(this).parents('.collapse-button').siblings('.collapse-content-wrap').toggleClass('show')
    })
    
})