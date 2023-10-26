/*
    Assignment : 05
    Name       : Vishal N Patel
    Student Id : 0827195
*/

$(document).ready(function () {
    // ContentItem class
    class ContentItem {
        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (id === this.id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (category !== null) {
                    this.category = category;
                }
            }
        }

        toString() {
            return `
                <div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>
            `;
        }
    }

    // Sample content items
    const contentItems = [
        new ContentItem(0, "Superhero 1", "Description 1", "Action"),
        new ContentItem(1, "Superhero 2", "Description 2", "Adventure"),
        new ContentItem(2, "Superhero 3", "Description 3", "Fantasy"),
        new ContentItem(3, "Superhero 4", "Description 4", "Science Fiction"),
        new ContentItem(4, "Superhero 5", "Description 5", "Mystery"),
    ];

    // Display content items
    const $contentList = $("#content-item-list");
    contentItems.forEach((item) => {
        $contentList.append(item.toString());
    });

    // Style content items
    $(".content-item-wrapper").css({
        border: "2px solid #000",
        width: "300px",
        padding: "10px",
        margin: "10px auto",
    });

    // Button click event for successful update
    $("#updateSuccessful").on("click", function () {
        // Update the first content item (for demonstration)
        contentItems[0].updateContentItem(0, "Updated Superhero 1", null, "Updated Action");
        // Re-render the updated item
        $contentList.html("");
        contentItems.forEach((item) => {
            $contentList.append(item.toString());
        });
    });

    // Button click event for unsuccessful update
    $("#updateUnsuccessful").on("click", function () {
        // Attempt to update a non-matching ID
        contentItems[1].updateContentItem(0, "Updated Superhero 2", null, "Updated Adventure");
        // Re-render the items
        $contentList.html("");
        contentItems.forEach((item) => {
            $contentList.append(item.toString());
        });
    });
});



