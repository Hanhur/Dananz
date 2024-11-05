import "./rating.css";

export function getRating()
{
    const rating = document.createElement("div");
    rating.className = "rating-1";
    rating.innerHTML = `
        <div class="rating-block">
            <span class="rating-span">350+</span>
            <p class="rating-text texts">Project Completed</p>
            <span class="rating-span">23+</span>
            <p class="rating-text texts">Professional Teams</p>
            <span class="rating-span">15+</span>
            <p class="rating-text">Years Experience</p>
        </div>
    `;

    return rating;
}