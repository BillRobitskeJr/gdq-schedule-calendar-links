# gdq-schedule-calendar-links

A bookmarklet to add "Add to Calendar" links to the [Games Done Quick schedule](https://gamesdonequick.com/schedule).  Running the bookmarklet will transform the game titles for all upcoming runs into links that will download an .ics file for that run when clicked.

## How to Add Bookmarklet (Chrome Desktop)

1. Copy the content of [dist/index.js](https://raw.githubusercontent.com/BillRobitskeJr/gdq-schedule-calendar-links/master/dist/index.js).
2. In Chrome, open the Bookmark Manager (under the Bookmarks menu).
3. Click the three dots in the blue header bar, and select **Add New Bookmark**.
4. Name the bookmark as you like (e.g. "GDQ - Enable Calendar Links").
5. In the **URL** field, enter "javascript:" (without the quotes) and paste in the copied dist/index.js contents.
6. Click **Save**.

Once done, you can use the bookmarklet by navigating to the Games Done Quick schedule page, and then selecting the bookmarklet from your bookmarks.
