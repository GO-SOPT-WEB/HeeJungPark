import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const sectionCard = document.querySelector('.section_card');
  const navMenu = document.querySelector('.nav_menu');
  const tagMenu = document.querySelector('.tag_menu');

  const tagMenuItems = Array.from(tagMenu.querySelectorAll('.tag_menu_list'));
  const crossIcons = Array.from(tagMenu.querySelectorAll('.cross_icon'));

  
  tagMenuItems.forEach(item => item.style.display = 'none');

  function handleCheckboxChange(event) {
    const selectedCategories = Array.from(navMenu.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.parentElement.textContent.trim());

    tagMenuItems.forEach((item, index) => {
      const categoryName = item.textContent.trim();
      const categoryCheckbox = navMenu.querySelector(`input[type="checkbox"]:nth-child(${index + 2})`);

      if (!event.target.checked && categoryCheckbox) {
        categoryCheckbox.checked = false;
      }
      if (selectedCategories.includes(categoryName) || selectedCategories.includes('전체')) {
        item.style.display = 'block';
        const crossIcon = item.querySelector('.cross_icon');
        if (crossIcon) {
          crossIcon.style.display = 'inline'; 
        }
        if (categoryCheckbox) {
          categoryCheckbox.checked = true;
        }
      } else {
        item.style.display = 'none';
        const crossIcon = item.querySelector('.cross_icon');
        if (crossIcon) {
          crossIcon.style.display = 'none'; 
        }
        if (categoryCheckbox) {
          categoryCheckbox.checked = false;
        }
      }
    });

    renderFilteredData(selectedCategories);
  }

  function handleTagClick(event) {
    const tagItem = event.currentTarget;
    const tagText = tagItem.textContent.trim();
    const tagIndex = Array.from(tagMenuItems).indexOf(tagItem);
    const categoryCheckbox = navMenu.querySelector(`input[type="checkbox"]:nth-child(${tagIndex + 2})`);

    if (categoryCheckbox) {
      categoryCheckbox.checked = false;
      categoryCheckbox.dispatchEvent(new Event('change')); 
    }

    tagItem.style.display = 'none';
    renderFilteredData([]);
  }

  function handleCrossIconClick(event) {
    const crossIcon = event.currentTarget;
    const tagItem = crossIcon.parentElement;
    const tagText = tagItem.textContent.trim();
    const tagIndex = Array.from(tagMenuItems).indexOf(tagItem);
    const categoryCheckbox = navMenu.querySelector(`input[type="checkbox"]:nth-child(${tagIndex + 2})`);
    const selectedCategories = Array.from(navMenu.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.parentElement.textContent.trim());
  
    if (categoryCheckbox) {
      categoryCheckbox.checked = false;
      categoryCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
    }
  
    tagItem.style.display = 'none';
  
    if (selectedCategories.includes(tagText)) {
      renderFilteredData(selectedCategories.filter(category => category !== tagText));
    } else {
      renderFilteredData(selectedCategories);
    }
  
    event.stopPropagation();
  }

  navMenu.addEventListener('change', handleCheckboxChange);
  tagMenuItems.forEach(item => item.addEventListener('click', handleTagClick));
  crossIcons.forEach(icon => icon.addEventListener('click', handleCrossIconClick));

  function renderFilteredData(selectedCategories) {
    sectionCard.innerHTML = '';

    const filteredData = data.filter(item => {
      if (selectedCategories.includes(item.category) || selectedCategories.includes('전체')) {
        return true;
      }
      return false;
    });

    filteredData.forEach(item => {
      const article = document.createElement('article');
      article.classList.add('section_card_article');

      const h3 = document.createElement('h3');
      h3.classList.add('section_card_h4');
      h3.textContent = item.menu;

      const p = document.createElement('p');
      p.classList.add('section_card_p');
      p.textContent = item.tag.join(' ');

      const addButton = document.createElement('button');
      addButton.classList.add('section_card_button');
      addButton.textContent = '+';

      const img = document.createElement('img');
      img.classList.add('section_card_img');
      img.src = item.url;
      img.alt = item.menu + ' 사진이 없네요';

      const button = document.createElement('button');
      button.classList.add('section_card_heart');
      button.textContent = '💗';

      article.appendChild(h3);
      article.appendChild(p);
      article.appendChild(addButton);
      article.appendChild(img);
      article.appendChild(button);

      sectionCard.appendChild(article);


      addButton.addEventListener('click', () => {
        showModal(item.tag.join(' '), addButton.parentNode);
      });
      
      
    });
  }

  function showModal(tagText, button) {
    const sectionCardArticle = button.closest('.section_card_article');
  
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const modalText = document.createElement('p');
    modalText.textContent = tagText;
  
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
  
    modalContent.appendChild(modalText);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    
    closeButton.addEventListener('click', () => {
      modal.remove();
    });
  
    sectionCardArticle.appendChild(modal);
  
  }
  
  
  
  
});
