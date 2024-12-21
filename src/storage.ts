import { APP_NAME } from './constants'
import { today } from './time'
import { activities, initializeActivities } from './activities'
import { activeTimelineItem, initializeTimelineItems, timelineItems } from './timeline-items'
import { startTimelineItemTimer, stopTimelineItemTimer } from './timeline-item-timer'
import type {State} from './types'

export function syncState(shouldLoad = true): void {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer()
  }
}

function loadState(): void {
  const state = loadFromLocalStorage()

  initializeActivities(state)
  initializeTimelineItems(state)
}

function loadFromLocalStorage(): State {
  return JSON.parse(localStorage.getItem(APP_NAME) ?? '{}')
}

function saveState(): void {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today()
    })
  )
}
