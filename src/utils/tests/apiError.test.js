import ApiError from '../helpers/apiError';

describe('ApiError', () => {
  it('should render error', () => {
    const error = new ApiError(500, 'Invalid credentials');
    expect(error).toEqual(new Error('Invalid credentials'));
  });
});
