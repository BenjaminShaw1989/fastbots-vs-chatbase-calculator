export interface PricingConfig {
  messages: number;
  removeBranding: boolean;
}

export interface CostResult {
  monthly: number;
  planName: string;
}

/**
 * Calculates Chatbase pricing based on verified 2025 logic.
 * 0 - 2,000 msgs: $40 (Hobby)
 * 2,001 - 12,000 msgs: $150 (Standard)
 * Remove Branding: +$39
 */
export const calculateChatbaseCost = ({ messages, removeBranding }: PricingConfig): CostResult => {
  let monthly = 0;
  let planName = '';

  if (messages <= 2000) {
    monthly = 40;
    planName = 'Hobby';
  } else {
    // Covers 2,001 up to 12,000 (and strictly follows 150 above based on prompt constraints)
    monthly = 150;
    planName = 'Standard';
  }

  if (removeBranding) {
    monthly += 39;
  }

  return { monthly, planName };
};

/**
 * Calculates FastBots pricing based on verified 2025 logic.
 * 0 - 2,000 msgs: $29 (Essential)
 * 2,001 - 5,000 msgs: $69 (Business)
 * 5,001 - 10,000 msgs: $150 (Standard)
 * Remove Branding: +$29
 */
export const calculateFastBotsCost = ({ messages, removeBranding }: PricingConfig): CostResult => {
  let monthly = 0;
  let planName = '';

  if (messages <= 2000) {
    monthly = 29;
    planName = 'Essential';
  } else if (messages <= 5000) {
    monthly = 69;
    planName = 'Business';
  } else {
    // Covers 5,001 up to 10,000+ based on prompt
    monthly = 150;
    planName = 'Standard';
  }

  if (removeBranding) {
    monthly += 29;
  }

  return { monthly, planName };
};