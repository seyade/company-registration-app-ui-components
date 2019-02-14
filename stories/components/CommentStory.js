import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Comments', module)
  .add(
    'Base',
    () => `
    <div class="ui-comment slds-feed">
      <ul class="ui-comment__list slds-feed__list">
        <li class="ui-comment__item slds-feed__item">
          <article class="ui-comment__post slds-post">
            <header class="slds-post__header slds-media">
              <div class="slds-media__figure">
                <a class="ui-avatar ui-avatar--circle" href="#">
                  <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                    <span
                      class="slds-icon_container slds-icon-standard-user"
                      title="Description of icon when needed"
                    >
                      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"
                        />
                      </svg>
                      <span class="slds-assistive-text">
                        Description of icon when needed
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="slds-media__body">
                <div
                  class="ui-comment__user slds-grid slds-grid_align-spread slds-has-flexi-truncate"
                >
                  <p>
                    <a href="#" title="Jason Rodgers">Jason Rogers</a>
                    —
                    <a href="#" title="Design Systems">Design Systems</a>
                  </p>
                  <button
                    class="slds-button slds-button_icon slds-button_icon-x-small"
                    aria-haspopup="true"
                    title="More Options"
                  >
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span class="slds-assistive-text">More Options</span>
                  </button>
                </div>
                <p class="slds-text-body_small">
                  <a
                    href="#"
                    title="Click for single-item view of this post"
                    class="ui-comment__time slds-text-link_reset"
                  >
                    5 days Ago
                  </a>
                </p>
              </div>
            </header>
            <div class="slds-post__content slds-text-longform">
              <p>
                Hey there! Here's the latest demo presentation
                <a href="#" title="Jenna Davis">@Jenna Davis</a>
                , let me know if there are any changes. I've updated slides 3-8 and
                slides 16-18 slides with new product shots.
              </p>
            </div>
            <footer class="slds-post__footer">
              <ul class="slds-post__footer-actions-list slds-list_horizontal">
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Like this item"
                    class="slds-button_reset slds-post__footer-action"
                    aria-pressed="false"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#like"
                      />
                    </svg>
                    Like
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Comment on this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share_post"
                      />
                    </svg>
                    Comment
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Share this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share"
                      />
                    </svg>
                    Share
                  </button>
                </li>
              </ul>
              <ul
                class="slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title"
              >
                <li class="slds-item">20 Shares</li>
                <li class="slds-item">259 Views</li>
              </ul>
            </footer>
          </article>
        </li>
      </ul>
    </div>
    `
  )
  .add(
    'With reply',
    () => `
    <div class="ui-comment slds-feed">
      <ul class="ui-comment__list slds-feed__list">
        <li class="ui-comment__item slds-feed__item">
          <article class="ui-comment__post slds-post">
            <header class="slds-post__header slds-media">
              <div class="slds-media__figure">
                <a class="ui-avatar ui-avatar--circle" href="#">
                  <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                    <span
                      class="slds-icon_container slds-icon-standard-user"
                      title="Description of icon when needed"
                    >
                      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"
                        />
                      </svg>
                      <span class="slds-assistive-text">
                        Description of icon when needed
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="slds-media__body">
                <div
                  class="slds-grid slds-grid_align-spread slds-has-flexi-truncate"
                >
                  <p>
                    <a href="#" title="Jason Rodgers">
                      Jason Rogers
                    </a>
                    —
                    <a href="#" title="Design Systems">
                      Design Systems
                    </a>
                  </p>
                  <button
                    class="slds-button slds-button_icon slds-button_icon-x-small"
                    aria-haspopup="true"
                    title="More Options"
                  >
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span class="slds-assistive-text">More Options</span>
                  </button>
                </div>
                <p class="slds-text-body_small">
                  <a
                    href="#"
                    title="Click for single-item view of this post"
                    class="ui-comment__time slds-text-link_reset"
                  >
                    5 days Ago
                  </a>
                </p>
              </div>
            </header>
            <div class="slds-post__content slds-text-longform">
              <p>
                Hey there! Here's the latest demo presentation
                <a href="#" title="Jenna Davis">@Jenna Davis</a>
                , let me know if there are any changes. I've updated slides 3-8 and
                slides 16-18 slides with new product shots.
              </p>
            </div>
            <footer class="slds-post__footer">
              <ul class="slds-post__footer-actions-list slds-list_horizontal">
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Like this item"
                    class="slds-button_reset slds-post__footer-action"
                    aria-pressed="false"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#like"
                      />
                    </svg>
                    Like
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Comment on this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share_post"
                      />
                    </svg>
                    Comment
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Share this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share"
                      />
                    </svg>
                    Share
                  </button>
                </li>
              </ul>
              <ul
                class="slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title"
              >
                <li class="slds-item">20 Shares</li>
                <li class="slds-item">259 Views</li>
              </ul>
            </footer>
          </article>
          <div class="ui-comment__post-reply slds-feed__item-comments">
            <ul>
              <li>
                <article class="slds-comment slds-media slds-hint-parent">
                  <div class="slds-media__figure">
                    <a class="ui-avatar ui-avatar--small ui-avatar--circle" href="#">
                      <span
                        class="slds-avatar slds-avatar_circle slds-avatar_small"
                      >
                        <span
                          class="slds-icon_container slds-icon-standard-user"
                          title="Description of icon when needed"
                        >
                          <svg
                            class="slds-icon slds-icon_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"
                            />
                          </svg>
                          <span class="slds-assistive-text">
                            Description of icon when needed
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="slds-media__body">
                    <header class="slds-media slds-media_center">
                      <div
                        class="slds-grid slds-grid_align-spread slds-has-flexi-truncate"
                      >
                        <p class="slds-truncate" title="Jenna Davis">
                          <a href="#">Jenna Davis</a>
                        </p>
                        <button
                          class="slds-button slds-button_icon slds-button_icon-x-small"
                          aria-haspopup="true"
                          title="More Options"
                        >
                          <svg class="slds-button__icon" aria-hidden="true">
                            <use
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span class="slds-assistive-text">More Options</span>
                        </button>
                      </div>
                    </header>
                    <div class="slds-comment__content slds-text-longform">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <footer>
                      <ul
                        class="ui-comment__post-reply-meta-list slds-list_horizontal slds-has-dividers_right slds-text-body_small"
                      >
                        <li class="slds-item">
                          <button
                            class="slds-button_reset"
                            title="Like this item"
                            aria-pressed="false"
                          >
                            Like
                          </button>
                        </li>
                        <li class="ui-comment__time slds-item">16hr Ago</li>
                      </ul>
                    </footer>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    `
  );
