import { TestBed } from '@angular/core/testing';

import { PostDetailResolverService } from './post-detail-resolver.service';

describe('PostDetailResolverService', () => {
  let service: PostDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
