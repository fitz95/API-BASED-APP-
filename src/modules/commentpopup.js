const popupContent = document.querySelector('.popupcontent');

export const popup = (data) => {
    popupContent.innerHTML = '';
    data.forEach((meal) => {
      
        if (meal.strInstructions.length > 25) {
          meal.strInstructions = meal.strInstructions.substring(0,55) + '...';
        }
        const closeBtn = document.createElement('i')
        closeBtn.className = 'fa fa-times';
        closeBtn.id = meal.idMeal;

        const image = document.createElement('img');
        const src = meal.strMealThumb;
        image.className = 'img-large';
        image.src = src;

        const heading = document.createElement('h1');
        heading.className = 'heading';
        heading.innerHTML = meal.strMeal;

        const detailDiv = document.createElement('div');
        detailDiv.className = 'detail-flex';

        const areaP = document.createElement('p');
        areaP.innerHTML = `Area: ${meal.strArea}`

        const categoryP = document.createElement('p');
        categoryP.innerHTML = `Area: ${meal.strCategory}`;

        detailDiv.appendChild(areaP);
        detailDiv.appendChild(categoryP);
        
        const subHeading = document.createElement('h3');
        subHeading.className = 'subheading';
        subHeading.innerHTML = 'Comments';

        const subHeading2 = document.createElement('h3');
        subHeading.className = 'subheading2';
        subHeading.innerHTML = 'Add A Comment';

        const formDiv = document.createElement('div');
        formDiv.className = 'form-div';

        var form = document.createElement("form");
        form.setAttribute("method", "post");
        
        var commentName = document.createElement("input");
        commentName.setAttribute("type", "text");
        commentName.setAttribute("id", "commentname");
        commentName.setAttribute("placeholder", "Your Name");

        var commentText = document.createElement("input");
        commentText.setAttribute("type", "textarea");
        commentText.setAttribute("id", "commentsubject");
        commentText.setAttribute("placeholder", "Your Insights");

        var submitBtn = document.createElement("input");
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("value", "Submit");

        form.appendChild(commentName);
        form.appendChild(commentText);
        form.appendChild(submitBtn);
        formDiv.appendChild(form)

    });
  };