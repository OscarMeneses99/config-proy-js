# Contributing to Nowo WebApp

## Steps to Contribute

1. **Create a New Branch**

   - Make a new branch with a name that briefly indicates the change you intend to make.
   - Example:
     ```bash
     git checkout -b feature/new-feature
     ```

2. **Make Your Changes**

   - Implement the necessary changes to the codebase.

3. **Commit Your Changes**

   - When committing, you must run the following command:
     ```bash
     npm run commit -- "Commit message"
     ```
   - This command checks the project's eslint and prettier rules. If everything is correct, a menu will appear in the terminal where you can choose to update the `package.json` according to the type of change: patch, minor, or major.
   - Choose the appropriate option, and the commit will be made.

4. **Push Your Branch**

   - Push your branch to the repository:
     ```bash
     git push origin feature/new-feature
     ```

5. **Create a Pull Request**
   - Create a Pull Request (PR) with a clear and concise description of the changes you made. This will help the technical reviewers understand your changes.
   - Avoid making PRs with large changes to facilitate the review process.
   - Add the technical reviewers to the PR.
   - Activate the option to delete the branch once the merge is complete.

## Additional Notes

  <p align="left">
    <img src="../assets/taking-notes.jpg" alt="taking-notes" width="150px">
  </p>

- Ensure your code adheres to the project's coding standards.
- Write clear commit messages that explain the 'why' and 'what' of your changes.
- Be responsive to feedback from the reviewers.

## Reviewers

- Thelma Romero
- Alan Mercado
