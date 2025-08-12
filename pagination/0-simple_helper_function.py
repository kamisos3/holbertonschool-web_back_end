def index_range(page, page_size):
    """Returns a tuple of size two that contains starting index"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
